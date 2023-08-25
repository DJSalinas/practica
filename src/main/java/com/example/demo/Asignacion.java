package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Asignacion {

    private @Id @GeneratedValue Long id;
    
    @ManyToOne()
    @JoinColumn(name = "id_area")
    private Area area;

    @ManyToOne()
    @JoinColumn(name = "id_empleado")
    private Empleado empleado;

    @ManyToOne()
    @JoinColumn(name = "id_proyecto")
    private Proyecto proyecto;

    public Asignacion(){}



    public Asignacion(Area area, Empleado empleado, Proyecto proyecto) {
        this.area = area;
        this.empleado = empleado;
        this.proyecto = proyecto;
    }



    public Long getId() {
        return id;
    }



    public void setId(Long id) {
        this.id = id;
    }



    public Area getArea() {
        return area;
    }



    public void setArea(Area area) {
        this.area = area;
    }



    public Empleado getEmpleado() {
        return empleado;
    }



    public void setEmpleado(Empleado empleado) {
        this.empleado = empleado;
    }



    public Proyecto getProyecto() {
        return proyecto;
    }



    public void setProyecto(Proyecto proyecto) {
        this.proyecto = proyecto;
    }



    
    
}
