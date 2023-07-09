package dev.arthur.accountsreceivable.services;

import dev.arthur.accountsreceivable.models.ClientModel;
import dev.arthur.accountsreceivable.repositories.ClientRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    final ClientRepository clientRrepository;

    public ClientService(ClientRepository clientRrepository) {
        this.clientRrepository = clientRrepository;
    }

    public List<ClientModel> findAll() {return clientRrepository.findAll();}

    public Optional<ClientModel> findById(Long id) {
        return clientRrepository.findById(id);
    }

    @Transactional
    public ClientModel save(ClientModel clientModel){
        return clientRrepository.save(clientModel);
    }

    @Transactional
    public void deleteById(Long id){
        clientRrepository.deleteById(id);
    }

}
