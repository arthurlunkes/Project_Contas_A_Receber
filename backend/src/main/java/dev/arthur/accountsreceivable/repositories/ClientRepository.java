package dev.arthur.accountsreceivable.repositories;

import dev.arthur.accountsreceivable.models.ClientModel;
import dev.arthur.accountsreceivable.models.ReceivableModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<ClientModel, Long> {
}
