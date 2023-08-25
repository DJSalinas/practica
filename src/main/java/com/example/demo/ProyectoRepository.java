package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "proyectos", path = "proyectos")
public interface ProyectoRepository extends CrudRepository<Proyecto, Long> {
    
}
