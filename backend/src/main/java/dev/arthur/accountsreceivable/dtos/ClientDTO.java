package dev.arthur.accountsreceivable.dtos;

import java.util.List;

public class ClientDTO {

    private String firstName;
    private String lastName;
    private String typeClient;
    private List<ReceivableDTO> receivableDTOS;

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

    public List<ReceivableDTO> getReceivableDTOS() {
        return receivableDTOS;
    }

    public void setReceivableDTOS(List<ReceivableDTO> receivableDTOS) {
        this.receivableDTOS = receivableDTOS;
    }
}
