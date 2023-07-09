package dev.arthur.accountsreceivable.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "CLIENT")
public class ClientModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String typeClient;

    @JsonManagedReference
    @OneToMany(mappedBy = "client", cascade = CascadeType.REMOVE)
    private List<ReceivableModel> receivableModels;

    public ClientModel(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTypeClient() {
        return typeClient;
    }

    public void setTypeClient(String typeClient) {
        this.typeClient = typeClient;
    }

    public List<ReceivableModel> getReceivableModels() {
        return receivableModels;
    }

    public void setReceivableModels(List<ReceivableModel> receivableModels) {
        this.receivableModels = receivableModels;
    }
}
