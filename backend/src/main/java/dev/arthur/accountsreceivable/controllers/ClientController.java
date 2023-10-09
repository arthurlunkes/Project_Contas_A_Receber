package dev.arthur.accountsreceivable.controllers;

import dev.arthur.accountsreceivable.dtos.ClientDTO;
import dev.arthur.accountsreceivable.dtos.RequestSaveDTO;
import dev.arthur.accountsreceivable.models.ClientModel;
import dev.arthur.accountsreceivable.models.ReceivableModel;
import dev.arthur.accountsreceivable.services.ClientService;
import dev.arthur.accountsreceivable.services.ReceivableService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/clients")
public class ClientController {

    final ClientService clientService;
    final ReceivableService receivableService;

    public ClientController(ClientService clientService, ReceivableService receivableService) {
        this.clientService = clientService;
        this.receivableService = receivableService;
    }

    @GetMapping
    public ResponseEntity findAll(){
        List<ClientModel> clientModels;
        try {
            clientModels = clientService.findAll();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: "+ e);
        }
        return ResponseEntity.status(HttpStatus.OK).body(clientModels);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        Optional<ClientModel> clientModel;
        try {
            clientModel = clientService.findById(id);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: "+ e);
        }
        if(!clientModel.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(clientModel);
    }

    @PostMapping
    public ResponseEntity<Object> saveClient(@RequestBody RequestSaveDTO requestSaveDTO) {
        ClientModel newClient = new ClientModel();
        BeanUtils.copyProperties(requestSaveDTO.getClientDTO(), newClient);
        ClientModel clientSave = clientService.save(newClient);

        ReceivableModel receivableModel = new ReceivableModel();
        BeanUtils.copyProperties(requestSaveDTO.getReceivableDTO(), receivableModel);
        receivableModel.setClient(clientSave);
        receivableService.saveReceivable(receivableModel);

        var client = clientService.findById(clientSave.getId());

        return ResponseEntity.status(HttpStatus.OK).body(client);
    }


    @PutMapping(value = "/{id}")
    public ResponseEntity<Object> alterById(@PathVariable Long id,
                                            @RequestBody ClientModel client){
        Optional<ClientModel> clientOld = clientService.findById(id);

        if (!clientOld.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!");
        }
        if(!clientOld.get().getReceivableModels().isEmpty() && client.getReceivableModels().isEmpty()){
            List<ReceivableModel> receivableModels = clientOld.get().getReceivableModels();
            for (ReceivableModel receivableModel: receivableModels) {
                receivableService.deleteById(receivableModel.getId());
            }
        }
        ClientModel clientAlter = clientOld.get();
        BeanUtils.copyProperties(client, clientAlter);
        return ResponseEntity.status(HttpStatus.OK).body(clientService.save(clientAlter));

    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id){
        Optional<ClientModel> clientModel = clientService.findById(id);

        if(!clientModel.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!");
        }
        try {
            clientService.deleteById(id);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: "+ e);
        }
        return ResponseEntity.status(HttpStatus.OK).body("Cliente deletado com sucesso!");
    }

}
