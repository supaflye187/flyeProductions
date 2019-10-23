<!-- // contact page -->
<div class= "contact-main">
  <div class="contact-small-container center-text">
    <h1>Contact Me</h1>
  </div>
    <form action="contact.php" method="post">
          <input type="text" name="reg_fName" placeholder="First Name" required>
          </br>
          <input type="text" name="reg_lName" placeholder="Last Name" required>
          </br>
          <input type="email" name="reg_email" placeholder="Email" required>
          </br>
          <textarea name="reg_message" rows="5" cols="60"></textarea>
          </br>
          <input type="submit" name='reg_submit' value='Submit'>
    </form>
</div>
