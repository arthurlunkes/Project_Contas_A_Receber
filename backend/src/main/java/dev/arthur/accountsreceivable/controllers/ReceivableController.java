package dev.arthur.accountsreceivable.controllers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(value = "/receivables")
public class ReceivableController {

    @GetMapping
    public ResponseEntity teste(@RequestHeader HttpHeaders headers){

        return ResponseEntity.status(HttpStatus.OK).body("Olá " + headers.get("clientName").get(0));

    }

}
