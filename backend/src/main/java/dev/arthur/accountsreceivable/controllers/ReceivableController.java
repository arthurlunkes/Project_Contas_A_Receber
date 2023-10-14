package dev.arthur.accountsreceivable.controllers;

import dev.arthur.accountsreceivable.models.ClientModel;
import dev.arthur.accountsreceivable.models.ReceivableModel;
import dev.arthur.accountsreceivable.services.ReceivableService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/receivables")
public class ReceivableController {

    final ReceivableService receivableService;

    public ReceivableController(ReceivableService receivableService) {
        this.receivableService = receivableService;
    }

    @GetMapping
    public ResponseEntity getAll(){

        List<ReceivableModel> receivableModels;
        try {
            receivableModels = receivableService.findAll();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: "+ e);
        }
        return ResponseEntity.status(HttpStatus.OK).body(receivableModels);

    }

    @GetMapping(path = "/teste")
    public ResponseEntity teste(@RequestHeader HttpHeaders headers){

        return ResponseEntity.status(HttpStatus.OK).body("Olá " + headers.get("clientName").get(0));

    }

}
