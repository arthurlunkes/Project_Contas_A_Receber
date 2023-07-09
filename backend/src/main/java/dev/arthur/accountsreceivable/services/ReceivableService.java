package dev.arthur.accountsreceivable.services;

import dev.arthur.accountsreceivable.models.ReceivableModel;
import dev.arthur.accountsreceivable.repositories.ReceivableRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReceivableService {

    final ReceivableRepository receivableRepository;

    public ReceivableService(ReceivableRepository receivableRepository) {
        this.receivableRepository = receivableRepository;
    }

    public List<ReceivableModel> findAll() {return receivableRepository.findAll();}

    public Optional<ReceivableModel> findById(Long id) {
        return receivableRepository.findById(id);
    }

    @Transactional
    public ReceivableModel saveReceivable(ReceivableModel receivableModel){
        return receivableRepository.save(receivableModel);
    }

    @Transactional
    public void deleteById(Long id){
        receivableRepository.deleteById(id);
    }

}
