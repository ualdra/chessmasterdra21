package ual.dra.chess.auth.controllers;

import java.util.HashMap;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ual.dra.chess.auth.helpers.HttpClientHelpers;
import ual.dra.chess.auth.models.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/user")
public class UserController {

  private String token;
  private static final String BASE_URL = "http://localhost:3000/";

  // Insert user record
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public boolean addUser(String userName, String password) {
    HashMap<Object, Object> data = new HashMap<>();

    data.put("name", userName);
    data.put("password", password);

    if (User.isValid(userName, password)) {
      HttpClientHelpers.post(BASE_URL + "singings", data);
      return true;
    } else {
      // Hacer saltar un error
      return false;
    }
  }

  public String getToken() {
    return token;
  }

  // Get and set the user token
  @GetMapping
  public void setToken(String userName, String password) {
    var body = HttpClientHelpers.get(BASE_URL + "users?name=" + userName + "&password=" + password).body();
    int start = body.indexOf("\"token\": ") + 9;
    token = body.substring(start, start + 64);
  }

  // Delete user record
  @DeleteMapping("/{userName}")
  public ResponseEntity<String> deleteUser(String userName) {
    try {
      HttpClientHelpers.delete(BASE_URL + "users?name=" + userName);
      return new ResponseEntity<>(HttpStatus.OK);
    } catch (RuntimeException ex) {
      // log the error message
      System.out.println(ex.getMessage());
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}