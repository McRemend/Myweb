package controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
	private static Connection con = null;

	// 驱动程序名
	private static String driverName = "com.mysql.jdbc.Driver";
	// 数据库用户名
	private static String userName = "admin";
	// 密码
	private static String userPasswd = "123456";
	// 数据库名
	private static String dbName = "test";
	// 联结字符串
	private static String url = "jdbc:mysql://127.0.0.1:3306/" + dbName + "?user=" + userName + "&password="
			+ userPasswd + "&useUnicode=true&characterEncoding=gbk";

	public static Connection getConnection() {

		try {
			Class.forName(driverName);
			con = DriverManager.getConnection(url);

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return con;
	}

	public static void closeConnection() {
		if (con != null) {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}