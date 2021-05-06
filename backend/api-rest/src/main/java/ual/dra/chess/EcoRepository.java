package ual.dra.chess;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface EcoRepository extends CrudRepository<Eco, Long> {


}