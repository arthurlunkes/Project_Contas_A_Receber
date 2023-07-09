package dev.arthur.accountsreceivable.dtos;

import dev.arthur.accountsreceivable.models.ClientModel;

public class ReceivableDTO {

    private String description;
    private String status;
    private double totalValue;
    private Long client;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getTotalValue() {
        return totalValue;
    }

    public void setTotalValue(double totalValue) {
        this.totalValue = totalValue;
    }

    public Long getClient() {
        return client;
    }

    public void setClient(Long client) {
        this.client = client;
    }
}
