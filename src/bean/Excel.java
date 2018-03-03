package bean;

public class Excel {
	private String pid;
	private String name;
	private String num;
	private String www;

	public Excel(String pid, String name, String num, String www) {
		super();
		this.pid = pid;
		this.name = name;
		this.num = num;
		this.www = www;
	}

	public Excel() {
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNum() {
		return num;
	}

	public void setNum(String num) {
		this.num = num;
	}

	public String getWww() {
		return www;
	}

	public void setWww(String www) {
		this.www = www;
	}

}