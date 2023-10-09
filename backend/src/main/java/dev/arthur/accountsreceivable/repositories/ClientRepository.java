package dev.arthur.accountsreceivable.repositories;

import dev.arthur.accountsreceivable.models.ClientModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<ClientModel, Long> {

}