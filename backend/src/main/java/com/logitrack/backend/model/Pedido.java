package com.logitrack.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private Long id;

    private String codigo;

    @Column(name="cliente_id")
    private Long clienteId;

    @Column(name="vendedor_id")
    private Long vendedorId;

    private String estado;

    @Column(name="direccion_entrega")
    private String direccionEntrega;

    private String comuna;
    private String telefono;
    private String observacion;
    private BigDecimal total;

    @Column(name = "lat_entrega", precision = 10, scale = 7)
    private BigDecimal latEntrega;

    @Column(name = "lon_entrega", precision = 10, scale = 7)
    private BigDecimal lonEntrega;

    @Column(name = "fecha_entrega")
    private LocalDateTime fechaEntrega;

    @Column(name = "chofer_id")
    private Long choferId;

    @Column(name = "fecha_asignacion")
    private LocalDateTime fechaAsignacion;

    @Column(name = "fecha_creacion")
    private LocalDateTime fechaCreacion;

    @PrePersist
    protected void onCreate(){
        fechaCreacion = LocalDateTime.now();
        if (estado == null) {
            estado = "PENDIENTE";
        }
    }

}
