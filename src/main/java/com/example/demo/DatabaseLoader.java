package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final EmpleadoRepository repositoryE;
	private final ProyectoRepository repositoryP;
	private final AsignacionRepository repositoryS;
	private final AreaRepository repositoryA;


	@Autowired
	public DatabaseLoader(EmpleadoRepository repositoryE, ProyectoRepository repositoryP,
						  AsignacionRepository repositoryS, AreaRepository repositoryA) {
		this.repositoryE = repositoryE;
		this.repositoryP = repositoryP;
		this.repositoryS = repositoryS;
		this.repositoryA = repositoryA;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryE.save(new Empleado("Heidi Salas", "salas@gmail.com"));
		this.repositoryE.save(new Empleado("Joselyn Rivera", "rivera@gmail.com"));

		
		Empleado e1 = new Empleado("Marco Paz", "paz@gmail.com");
		this.repositoryE.save(e1);

		this.repositoryP.save(new Proyecto("Casa Grande", "proyecto casa grande"));
		this.repositoryP.save(new Proyecto("Asesoria inmobiliaria", "apoyo para construccion"));
		
		
		Proyecto p1 = new Proyecto("Diseño de estructuras", "diseñar la estructura para una casa");
		this.repositoryP.save(p1);

		
		Area a = new Area("Recursos Humanos");
		this.repositoryA.save(a);

		this.repositoryS.save(new Asignacion(a,e1,p1));
	}
}