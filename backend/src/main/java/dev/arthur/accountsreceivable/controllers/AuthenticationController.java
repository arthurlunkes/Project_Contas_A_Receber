package dev.arthur.accountsreceivable.controllers;

import dev.arthur.accountsreceivable.dtos.AuthenticationDTO;
import dev.arthur.accountsreceivable.dtos.LoginResponseDTO;
import dev.arthur.accountsreceivable.dtos.RegisterDTO;
import dev.arthur.accountsreceivable.models.ClientModel;
import dev.arthur.accountsreceivable.repositories.UserRepository;
import dev.arthur.accountsreceivable.security.User;
import dev.arthur.accountsreceivable.services.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthenticationDTO data){
        var userNamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(userNamePassword);

        var token = tokenService.generateToken((User)auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterDTO data){
        if(this.userRepository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.login(), encryptedPassword, data.role());

        this.userRepository.save(newUser);

        return ResponseEntity.ok().build();

    }

    //Melhorar esse método, pois acessa o repository direto(foi criado apenas para teste!)
    @GetMapping("/users")
    public ResponseEntity findAll(){
        List<User> users;
        try {
            users = userRepository.findAll();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro: "+ e);
        }
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

}
