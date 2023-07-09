package dev.arthur.accountsreceivable.dtos;

public class RequestSaveDTO {
    private ClientDTO clientDTO;
    private ReceivableDTO receivableDTO;

    public ClientDTO getClientDTO() {
        return clientDTO;
    }

    public void setClientDTO(ClientDTO clientDTO) {
        this.clientDTO = clientDTO;
    }

    public ReceivableDTO getReceivableDTO() {
        return receivableDTO;
    }

    public void setReceivableDTO(ReceivableDTO receivableDTO) {
        this.receivableDTO = receivableDTO;
    }
}
