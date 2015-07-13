package de.yamass.angular.service;

/**
 * Revision: $Revision$
 */
public class Todo {

   private int id;
   private String title;
   private boolean done;

   public int getId() {
      return id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public String getTitle() {
      return title;
   }

   public void setTitle(String title) {
      this.title = title;
   }

   public boolean isDone() {
      return done;
   }

   public void setDone(boolean done) {
      this.done = done;
   }
}
