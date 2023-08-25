package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Empleado {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String correo;

	private Empleado() {}

	public Empleado(String nombre, String correo) {
		this.nombre = nombre;
		this.correo = correo;
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

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}


	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Empleado empleado = (Empleado) o;
		return Objects.equals(id, empleado.id) &&
			Objects.equals(nombre, empleado.nombre) &&
			Objects.equals(correo, empleado.correo);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, correo);
	}


	@Override
	public String toString() {
		return "Empleado{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", correo='" + correo + '\'' +
			'}';
	}

	

	
}