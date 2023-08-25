package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/asignaciones/{id}/formacion")
	public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT asignacion.id as ID, empleado.nombre as EMPLEADO, proyecto.nombre as PROYECTO FROM asignacion JOIN empleado ON asignacion.id_empleado=empleado.id JOIN proyecto ON asignacion.id_proyecto=proyecto.id WHERE asignacion.id_area = ?";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

}