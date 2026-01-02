package com.logitrack.backend.service;

import com.logitrack.backend.model.Pedido;
import com.logitrack.backend.repository.PedidoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    public List<Pedido> listarTodos() {
        return pedidoRepository.findAll();
    }

    public Pedido guardar(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }
}