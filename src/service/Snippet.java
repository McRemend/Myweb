package service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Snippet {
	public static String[] paramArray = {"参数名称","省内漫游","国内漫游"};  
	/** 
     * 读取Office 2007 excel 
     * */  
    public static List<Map<String, Object>> read2007Excel(InputStream fileInputStream)  
            throws IOException {  
        List<Map<String, Object>> list = new LinkedList<Map<String, Object>>();  
        // 构造 XSSFWorkbook 对象，strPath 传入文件路径  
        XSSFWorkbook xwb = new XSSFWorkbook(fileInputStream);  
        // 读取第一章表格内容  
        XSSFSheet sheet = xwb.getSheetAt(0);  
        Object value = null;  
        XSSFRow row = null;  
        XSSFCell cell = null;  
        int counter = 1;  
        DecimalFormat df = new DecimalFormat("0");// 格式化 number String  
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 格式化日期字符串  
        DecimalFormat nf = new DecimalFormat("0.00");// 格式化数字  
        for (int i = sheet.getFirstRowNum(); counter < sheet.getPhysicalNumberOfRows(); i++) {  
            row = sheet.getRow(i);  
            if (row == null||i==0) {        //表头不取  
                continue;  
            } else {  
                counter++;  
            }  
            Map<String, Object> linked = new HashMap<String, Object>();  
            for (int j = row.getFirstCellNum(); j < row.getLastCellNum(); j++) {  
                cell = row.getCell(j);  
                if (cell == null) {  
                    value=null;  
                }else{  
                    switch (cell.getCellType()) {  
                        case XSSFCell.CELL_TYPE_STRING:  
                            value = cell.getStringCellValue();  
                            break;  
                        case XSSFCell.CELL_TYPE_NUMERIC:  
                            if ("@".equals(cell.getCellStyle().getDataFormatString())) {  
                                value = df.format(cell.getNumericCellValue());  
                            } else if ("General".equals(cell.getCellStyle().getDataFormatString())) {  
                                value = nf.format(cell.getNumericCellValue());  
                            } else {  
                                value = sdf.format(HSSFDateUtil.getJavaDate(cell  
                                        .getNumericCellValue()));  
                            }  
                            break;  
                        case XSSFCell.CELL_TYPE_BOOLEAN:  
                            value = cell.getBooleanCellValue();  
                            break;  
                        case XSSFCell.CELL_TYPE_BLANK:  
                            value = "";  
                            break;  
                        default:  
                            value = cell.toString();  
                        }  
                    }  
                linked.put(paramArray[j],value);  
            }  
            list.add(linked);  
        }  
        System.out.println(list);
        return list;  
    }
	public static Map<String, ArrayList<String>> readExcelData(InputStream dataPath) throws IOException {
	        InputStream is = dataPath;
	
	        @SuppressWarnings("resource")
	        XSSFWorkbook wb = new XSSFWorkbook(is);
	
	        XSSFSheet sheet = wb.getSheetAt(0); // 获取第一个sheet表
	
	        XSSFRow rowData;
	        Map<String, ArrayList<String>> resultData = new HashMap<String, ArrayList<String>>();
	        String trans_key = null;
	        String item;
	
	        for (int i = sheet.getTopRow(); i < sheet.getLastRowNum() + 1; i++) {
	            rowData = sheet.getRow(i);
	            if (i == sheet.getTopRow()) {
	                continue; //标题不读入
	            }
	            
	            ArrayList<String> trans_item = new ArrayList<String>();
	            
	            for (int j = rowData.getFirstCellNum(); j < rowData.getLastCellNum(); j++) {
	                
	                if (j == rowData.getFirstCellNum()) {
	                    trans_key = rowData.getCell(j).toString();
	                } else {
	                    item = rowData.getCell(j).toString();
	                    trans_item.add(item);
	                }
	            }
	            resultData.put(trans_key, trans_item);
	        }
	
	        is.close();
	        
	        return resultData;
	    }  
	
}

