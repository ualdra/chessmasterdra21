package ual.dra.chess;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Eco")
public class Eco implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 65)
    @Column(name = "name")
    private String name;

    @Size(max = 3)
    @Column(name = "eco")
    private String eco;

    @NotNull
    @Email
    @Size(max = 100)
    @Column(name = "fen")
    private String fen;

    @NotNull
    @Size(max = 255)
    @Column(name = "moves")
    private String moves;

    // Hibernate requires a no-arg constructor
    public Eco() {

    }
    public Eco(String name, String eco, String fen, String moves) {
        this.name = name;
        this.eco = eco;
        this.fen = fen;
        this.moves = moves;
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEco() {
		return eco;
	}
	public void setEco(String eco) {
		this.eco = eco;
	}
	public String getFen() {
		return fen;
	}
	public void setFen(String fen) {
		this.fen = fen;
	}
	public String getMoves() {
		return moves;
	}
	public void setMoves(String moves) {
		this.moves = moves;
	}
	
}