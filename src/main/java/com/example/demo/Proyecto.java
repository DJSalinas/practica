package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Proyecto {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String descripcion;

	private Proyecto() {}

	public Proyecto(String nombre, String descripcion) {
		this.nombre = nombre;
		this.descripcion = descripcion;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}


	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Proyecto proyecto = (Proyecto) o;
		return Objects.equals(id, proyecto.id) &&
			Objects.equals(nombre, proyecto.nombre) &&
			Objects.equals(descripcion, proyecto.descripcion);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, descripcion);
	}


	@Override
	public String toString() {
		return "Proyecto{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", descripcion='" + descripcion + '\'' +
			'}';
	}

	
}