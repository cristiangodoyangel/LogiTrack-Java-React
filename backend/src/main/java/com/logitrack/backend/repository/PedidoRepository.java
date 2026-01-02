package com.logitrack.backend.repository;

import com.logitrack.backend.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByChoferId(Long choferId);
    List<Pedido> findByEstado(String estado);
}