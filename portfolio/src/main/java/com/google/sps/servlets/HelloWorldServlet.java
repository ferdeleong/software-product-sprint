package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    String funFacts[] = {"I love ice skating", "I enjoy watching The Office", "I love pasta"};
    Gson gson = new Gson();
    String json = gson.toJson(funFacts);
    // "{\"I love ice skating\", \"I enjoy watching The Office\", \"I love pasta\"}"

    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

}