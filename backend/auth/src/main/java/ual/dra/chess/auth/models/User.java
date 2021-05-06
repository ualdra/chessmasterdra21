package ual.dra.chess.auth.models;

public class User {

	private int id;
	
	private String name;

	private String password;

	private String token;
	
	private String role;
	
	public User() {
		super();
	}

    public User(String name, String password) {
		super();
		this.setName(name);
		this.setPassword(password);
	}
	
	public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public static boolean isValid(String userName, String password){
        return userName != null && userName.trim().length() > 0 &&
               password != null && password.length() > 7 && password.length() < 255;
    }

    public boolean isValid(){
        return isValid(getName(), getPassword());
    }
}
