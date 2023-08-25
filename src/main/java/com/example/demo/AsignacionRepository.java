package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "asignaciones", path = "asignaciones")
public interface AsignacionRepository extends CrudRepository<Asignacion, Long> {
    
}
