package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "areas", path = "areas")
public interface AreaRepository extends CrudRepository<Area, Long> {
    
}
