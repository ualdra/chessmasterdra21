package chess.example.rest;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Jugadores")
public class Jugador implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 65)
    @Column(name = "Nombre")
    private String nombre;

    @Size(max = 65)
    @Column(name = "Href")
    private String href;

    @NotNull
    private String bandera;

    @NotNull
    private String pais;
    @NotNull
    private String elo;
    @NotNull
    private String posicion;

    // Hibernate requires a no-arg constructor
    public Jugador() {

    }
    public Jugador(String nombre, String href, String bandera, String pais, String elo, String posicion) {
        this.nombre=nombre;
        this.href = href;
        this.bandera = bandera;
        this.pais = pais;
        this.elo= elo;
        this.posicion=posicion;
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
    public String getPosicion() {
        return posicion;
    }
    public void setPosicion(String posicion) {
        this.posicion = posicion;
    }
    public String getHref() {
        return href;
    }
    public void setHref(String href) {
        this.href = href;
    }
    public String getBandera() {
        return bandera;
    }
    public void setBandera(String bandera) {
        this.bandera = bandera;
    }
    public String getPais() {
        return pais;
    }
    public void setPais(String pais) {
        this.pais = pais;
    }
    public String getElo() {
        return elo;
    }
    public void setElo(String elo) {
        this.elo = elo;
    }
	
}