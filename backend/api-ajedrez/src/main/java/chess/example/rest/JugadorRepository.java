package chess.example.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import ual.dra.rest.Jugador;

@RepositoryRestResource()
public interface JugadorRepository extends CrudRepository<Jugador, Long> {
    

}