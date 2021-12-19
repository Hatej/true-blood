package fer.progi.illidimusdigitus.trueblood.service.impl;

import fer.progi.illidimusdigitus.trueblood.model.Donation;
import fer.progi.illidimusdigitus.trueblood.model.User;
import fer.progi.illidimusdigitus.trueblood.service.EmailService;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.lowagie.text.Document;
import com.lowagie.text.pdf.PdfDocument;
import com.lowagie.text.pdf.PdfWriter;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;





@AllArgsConstructor
@Service
public class EmailSender implements EmailService {

    @Autowired
    private JavaMailSender mailSender;


    @Override
    @Async
    public void send(String to, String name, String username ,String link) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setTo(to);
            helper.setSubject("Aktiviraj račun");
            helper.setText(buildConfirmation(name, username,link), true);
            helper.setFrom("noreply.trueblood@gmail.com");
            mailSender.send(mimeMessage);

        } catch (MessagingException exc){
            //exception wrapping
            throw new IllegalStateException("failed to send email");
        }
    }

    public String buildConfirmation(String name, String username, String link) {
        return "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"53\" bgcolor=\"#0b0c0c\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"#0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Confirm your email</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Dobar dan " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> Hvala na registraciji. Pritisnite link ispod kako bi aktivirali račun: </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> <a href=\"" + link + "\">Aktiviraj</a> </p></blockquote>\n  <p>Vaš donorID je " + username + "\n</p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>";
    }

	@Override
	public void sendgeneratedPDF(Donation donation, User user)  {
		ByteArrayOutputStream outputStream = null;
		try {
			
	        MimeBodyPart textBodyPart = new MimeBodyPart();
	        textBodyPart.setText(buildForPDF(user));

	        outputStream = new ByteArrayOutputStream();
	        try {
				writePDF(outputStream);
			} catch (Exception e) {
				
				e.printStackTrace(); 
			}
	        byte[] bytes = outputStream.toByteArray();

	        
	        DataSource dataSource = new ByteArrayDataSource(bytes, "application/pdf");
	        MimeBodyPart pdfBodyPart = new MimeBodyPart();
	        pdfBodyPart.setDataHandler(new DataHandler(dataSource));
	        pdfBodyPart.setFileName("PDFpotvrda.pdf");

	        MimeMultipart mimeMultipart = new MimeMultipart();
	        mimeMultipart.addBodyPart(textBodyPart);
	        mimeMultipart.addBodyPart(pdfBodyPart);

            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setTo(user.getEmail());
            helper.setSubject("Potvrda o darivanju krvi");
            helper.setFrom("noreply.trueblood@gmail.com");
            mimeMessage.setContent(mimeMultipart);
            
            mailSender.send(mimeMessage);

        } catch (MessagingException exc){
            //exception wrapping
            throw new IllegalStateException("failed to send email");
        }
		System.out.println("POSLAN PDF");
		
	}

	
	private String buildForPDF(User user) {
		 return 
		 "Poštovani/a " + user.getName() +" " + user.getSurname() + ",\n" +
		 "Hvala na doniranju krvi, u privitku se nalazi potvrda o doniranju krvi\n\n" +
		 "Vaš TrueBlood tim!";
		
	}

	public void writePDF(OutputStream outputStream) throws Exception {
		//Document document = new Document();
		
		
		/*PdfDocument pdf = new PdfDocument();
		PdfWriter.getInstance(pdf, outputStream);
	    pdf.open();
	    
	    pdf.addTitle("Potvrda o darivanju krvi");
	    //Paragraph paragraph = new Paragraph();
	    //paragraph.add(new Chunk("hello!"));
	    //document.add(paragraph);
	    pdf.close();*/
	}
}

