package dev.arthur.accountsreceivable.repositories;

import dev.arthur.accountsreceivable.models.ReceivableModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceivableRepository extends JpaRepository<ReceivableModel, Long> {

}
