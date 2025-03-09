import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Service wird global bereitgestellt
})

export class PrivacyTemplateService {
  languageData: {
    english: {
        privacyTitle: string;
        responsible: string;
        rights: string;
        rightsHeader: string;
        rightsText1: string;
        rightsText2: string;
        rightsText3: string;
        rightsText4: string;
        rightsText5: string;
        rightsText6: string;
        rightsText7: string;
        rightsText8: string;
        rightsText9: string;
        processingText1: string;
        processingText2: string;
        processingText3: string;
        processingText4: string;
        processingText5: string;
        processingText6: string;
        processingText7: string;
        processingText8: string;
        processingText9: string;
        processingText10: string;
        processingText11: string;
        processingText12: string;
        processingText13: string;
        processingText14: string;
        processingText15: string;
        processingText16: string;
        processingText17: string;
        processingText18: string;
        processingText19: string;
        processingText20: string;
        processingText21: string;
        processingText22: string;
        processingText23: string;
        processingText24: string;
        processingText25: string;
        processingText26: string;
        processingText27: string;
        processingText28: string;
        processingText29: string;
        processingText30: string;
        processingText31: string;
        processingText32: string;
        processingText33: string;
        processingText34: string;
        processingText35: string;
        processingText36: string;
        processingText37: string;
        processingText38: string;
        processingText39: string;
        processingText40: string;
        processingText41: string;
        processingText42: string;
        processingText43: string;
        processingText44: string;
        processingText45: string;
        processingText46: string;
        processingText47: string;
        processingText48: string;
        processingText49: string;
        processingText50: string;
        processingText51: string;
        processingText52: string;
        processingText53: string;
        processingText54: string;
        objectText1: string;
        objectText2: string;
        objectText3: string;
        objectText4: string;
        objectText5: string;
        objectText6: string;
        objectText7: string;
        objectText8: string;
        objectText9: string;
        objectText10: string;
        objectText11: string;
        objectText12: string;
    };
    german: {
        privacyTitle: string;
        responsible: string;
        rights: string;
        rightsHeader: string;
        rightsText1: string;
        rightsText2: string;
        rightsText3: string;
        rightsText4: string;
        rightsText5: string;
        rightsText6: string;
        rightsText7: string;
        rightsText8: string;
        rightsText9: string;
        processingText1: string;
        processingText2: string;
        processingText3: string;
        processingText4: string;
        processingText5: string;
        processingText6: string;
        processingText7: string;
        processingText8: string;
        processingText9: string;
        processingText10: string;
        processingText11: string;
        processingText12: string;
        processingText13: string;
        processingText14: string;
        processingText15: string;
        processingText16: string;
        processingText17: string;
        processingText18: string;
        processingText19: string;
        processingText20: string;
        processingText21: string;
        processingText22: string;
        processingText23: string;
        processingText24: string;
        processingText25: string;
        processingText26: string;
        processingText27: string;
        processingText28: string;
        processingText29: string;
        processingText30: string;
        processingText31: string;
        processingText32: string;
        processingText33: string;
        processingText34: string;
        processingText35: string;
        processingText36: string;
        processingText37: string;
        processingText38: string;
        processingText39: string;
        processingText40: string;
        processingText41: string;
        processingText42: string;
        processingText43: string;
        processingText44: string;
        processingText45: string;
        processingText46: string;
        processingText47: string;
        processingText48: string;
        processingText49: string;
        processingText50: string;
        processingText51: string;
        processingText52: string;
        processingText53: string;
        processingText54: string;
        objectText1: string;
        objectText2: string;
        objectText3: string;
        objectText4: string;
        objectText5: string;
        objectText6: string;
        objectText7: string;
        objectText8: string;
        objectText9: string;
        objectText10: string;
        objectText11: string;
        objectText12: string;
    };
  } = {
    english: {
      privacyTitle: 'Privacy Policy',
      responsible: 'Responsible person',
      rights: 'Your data subject rights',
      rightsHeader: 'In accordance with the EU General Data Protection Regulation (GDPR), you can exercise the following rights at any time using the contact details provided:',
      rightsText1: 'Information about your data stored by us and its processing (Article 15 GDPR),',
      rightsText2: 'Correction of incorrect personal data (Article 16 GDPR),',
      rightsText3: 'Deletion of your data stored by us (Article 17 GDPR),',
      rightsText4: 'Restriction of data processing if we are not yet allowed to delete your data due to legal obligations (Art. 18 GDPR),',
      rightsText5: 'Objection to the processing of your data by us (Art. 21 GDPR) and',
      rightsText6: 'Data portability, provided you have consented to data processing or have concluded a contract with us (Article 20 GDPR).',
      rightsText7: 'If you have given us your consent, you can revoke it at any time with future effect.',
      rightsText8: 'You can contact a supervisory authority with a complaint at any time, e.g. B. to the responsible supervisory authority in the federal state of your place of residence or to the authority responsible for us.',
      rightsText9: 'You can find a list of supervisory authorities (for non-public areas) with addresses at:',
      processingText1: 'Processing activities',
      processingText2: 'Collection of general information when you visit our website',
      processingText3: 'Type and purpose of processing',
      processingText4: 'When you access our website, i.e. if you do not register or otherwise submit information, information of a general nature is automatically collected. This information (server log files) includes the type of web browser, the operating system used, the domain name of your Internet service provider, your IP address and similar.',
      processingText5: 'They are processed in particular for the following purposes:',
      processingText6: 'for technically error-free presentation and optimization of the website',
      processingText7: 'We do not use your data to draw conclusions about you personally. However, we reserve the right to subsequently check the server log files if there are concrete indications of illegal use.',
      processingText8: 'Legal basis and legitimate interest',
      processingText9: 'Processing is carried out in accordance with Article 6 Paragraph 1 Letter f of the GDPR based on our legitimate interest in improving the stability and functionality of our website as well as ensuring system security and detecting misuse.',
      processingText10: 'Recipient',
      processingText11: 'Recipients of the data may be technical service providers who act as contract processors for the operation and maintenance of our website.',
      processingText12: 'Storage period',
      processingText13: 'Data is stored in server log files in a form that allows the identification of the data subjects for a maximum of 30 days; unless a security-relevant event occurs (e.g. a DDoS attack).',
      processingText14: 'In the event of such an event, server log files are stored until the security-relevant event has been eliminated and fully clarified.',
      processingText15: 'Provision required or required',
      processingText16: 'The provision of the aforementioned personal data is neither legally nor contractually required. However, without the IP address, the service and functionality of our website cannot be guaranteed. In addition, individual services may be unavailable or restricted.',
      processingText17: 'contradiction',
      processingText18: 'Please read the information about your right to object in accordance with Art. 21 GDPR below.',
      processingText19: 'Contact us',
      processingText20: 'Type and purpose of processing',
      processingText21: 'Our website features a contact form that can be used for electronic communication. If a user makes use of this option, the data entered in the input fields will be transmitted to us and stored.',
      processingText22: 'At the time the message is sent, the following data will also be stored:',
      processingText23: 'URL from which the request originated',
      processingText24: 'Contact can also be made via the provided email addresses. In this case, the personal data transmitted with the email, such as the date and time of the email, the email address, IP addresses, and information about the servers involved in the email communication, will be stored.',
      processingText25: 'You can contact us using the provided phone numbers. In this case, we collect log data that includes your phone number and the duration of the call.',
      processingText26: 'Regardless of the communication method chosen, we collect the content of your request. Your data will be stored for the purpose of individual communication with you.',
      processingText27: 'Legal basis',
      processingText28: 'The processing of data is based on a legitimate interest (Art. 6 (1) (f) GDPR).',
      processingText29: 'Our legitimate interest in processing your data is to enable simple communication.',
      processingText30: 'If you contact us to request an offer, the data processing takes place for the purpose of pre-contractual measures (Art. 6 (1) (b) GDPR).',
      processingText31: 'Recipient',
      processingText32: 'Recipients of the data may include technical service providers acting as contract processors for the operation and maintenance of our website.',
      processingText33: 'Storage period',
      processingText34: 'Data will be deleted no later than 30 days after processing the contact request.',
      processingText35: 'If a contractual relationship arises, we are subject to legal retention periods, generally 6 or 10 years for proper accounting and tax requirements.',
      processingText36: 'Provision mandatory or required',
      processingText37: 'Providing your personal data is voluntary. However, we can only process your request if you provide the necessary data and the reason for your inquiry.',
      processingText38: 'Contradiction',
      processingText39: 'Please read the information about your right to object according to Art. 21 GDPR below.',
      processingText40: 'Reach measurement',
      processingText41: 'Type and purpose of processing',
      processingText42: 'Reach measurement serves to analyze visitor flows to our online service and may include pseudonymous values such as behavior, interests, or demographic information about visitors, such as age or gender. With the help of reach analysis, we can identify, for example, when our online offer or its functions or content are most frequently used or invite repeat use. We can also identify areas that need adjustment.',
      processingText43: 'You can find out which tools we use for reach measurement below.',
      processingText44: 'Legal basis',
      processingText45: 'Processing is carried out according to Art. 6 (1) (f) GDPR based on our legitimate interest. The reach measurement and the information obtained from it help us adapt the web offer.',
      processingText46: 'Recipient',
      processingText47: 'We use technical service providers for the operation and maintenance of our website, who act as our processors.',
      processingText48: 'Storage period',
      processingText49: 'Information on the storage period can be found in the information about the tools used below.',
      processingText50: 'Provision mandatory or required',
      processingText51: 'Providing the data is neither legally nor contractually required.',
      processingText52: 'Contradiction',
      processingText53: 'Read the information about your right to object according to Art. 21 GDPR further below.',
      processingText54: 'Tools used for reach measurement',
      objectText1: 'Information about your right to object according to Art. 21 GDPR',
      objectText2: 'Individual right to object',
      objectText3: 'You have the right to object at any time to the processing of your personal data, which is based on Art. 6 (1) (f) GDPR (data processing based on a legitimate interest), for reasons arising from your particular situation; this also applies to profiling based on this provision as defined in Art. 4 (4) GDPR.',
      objectText4: 'If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or the processing serves the establishment, exercise, or defense of legal claims.',
      objectText5: 'Recipient of the objection',
      objectText6: 'Changes to our privacy policy',
      objectText7: 'We reserve the right to adjust this privacy policy to ensure it meets current legal requirements or to implement changes in our services in the privacy policy, e.g., the introduction of new services. The new privacy policy will apply for your next visit.',
      objectText8: 'Questions about data protection',
      objectText9: 'If you have any questions about data protection, please send us an email to the data controller mentioned above.',
      objectText10: 'Copyright notice',
      objectText11: 'This data protection declaration was created with the help of activeMind AG - the experts for',
      objectText12: 'external data protection officer'
    },
    german: {
      privacyTitle: 'Datenschutzhinweise',
      responsible: 'Verantwortliche(r)',
      rights: 'Ihre Betroffenenrechte',
      rightsHeader: 'Unter den angegebenen Kontaktdaten können Sie gemäß EU-Datenschutz-Grundverordnung (DSGVO) jederzeit folgende Rechte ausüben:',
      rightsText1: 'Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),',
      rightsText2: 'Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),',
      rightsText3: 'Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),',
      rightsText4: 'Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),',
      rightsText5: 'Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und',
      rightsText6: 'Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).',
      rightsText7: 'Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
      rightsText8: 'Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.',
      rightsText9: 'Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: ',
      processingText1: 'Verarbeitungstätigkeiten',
      processingText2: 'Erfassung allgemeiner Informationen beim Besuch unserer Website',
      processingText3: 'Art und Zweck der Verarbeitung',
      processingText4: 'Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.',
      processingText5: 'Sie werden insbesondere zu folgenden Zwecken verarbeitet:',
      processingText6: 'zur technisch fehlerfreien Darstellung und Optimierung der Website',
      processingText7: 'Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Allerdings behalten wir uns vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.',
      processingText8: 'Rechtsgrundlage und berechtigtes Interesse',
      processingText9: 'Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website sowie der Sicherstellung der Systemsicherheit und Missbrauchserkennung.',
      processingText10: 'Empfänger',
      processingText11: 'Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.',
      processingText12: 'Speicherdauer',
      processingText13: 'Daten werden in Server-Log-Dateien in einer Form, die die Identifizierung der betroffenen Personen ermöglicht, maximal für 30 Tage gespeichert; es sei denn, dass ein sicherheitsrelevantes Ereignis auftritt (z.B. ein DDoS-Angriff).',
      processingText14: 'Im Falle eines solchen Ereignisses werden Server-Log-Dateien bis zur Beseitigung und vollständigen Aufklärung des sicherheitsrelevanten Ereignisses gespeichert.',
      processingText15: 'Bereitstellung vorgeschrieben oder erforderlich',
      processingText16: 'Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein.',
      processingText17: 'Widerspruch',
      processingText18: 'Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.',
      processingText19: 'Kontaktaufnahme',
      processingText20: 'Art und Zweck der Verarbeitung',
      processingText21: 'Auf unserer Website ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert.',
      processingText22: 'Zum Zeitpunkt der Absendung der Nachricht werden zudem folgende Daten gespeichert:',
      processingText23: 'URL, von der die Anfrage erfolgte',
      processingText24: 'Eine Kontaktaufnahme ist über die bereitgestellten E-Mail-Adressen möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert. Hierzu zählen Datum und Uhrzeit des E-Mailversands, E-Mailadresse, IP-Adressen sowie Informationen zu den an der E-Mail-Kommunikation beteiligten Servern.',
      processingText25: 'Sie können Sie über die bereitgestellten Telefonnummern Kontakt zu uns aufnehmen. Hierbei erheben wir Protokolldaten, die Ihre Telefonnummer und die Dauer des Gesprächs beinhalten.',
      processingText26: 'Unabhängig von der gewählten Kommunikationsart erheben wir den Inhalt Ihrer Anfrage. Ihre Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert.',
      processingText27: 'Rechtsgrundlage',
      processingText28: 'Die Verarbeitung der Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).',
      processingText29: 'Unser berechtigtes Interesse an der Verarbeitung Ihrer Daten ist die Ermöglichung einer unkomplizierten Kontaktaufnahme.',
      processingText30: 'Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).',
      processingText31: 'Empfänger',
      processingText32: 'Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.',
      processingText33: 'Speicherdauer',
      processingText34: 'Daten werden spätestens 30 Tage nach Bearbeitung der Kontaktaufnahme gelöscht.',
      processingText35: 'Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen. Diese betragen grundsätzlich 6 oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und steuerrechtlichen Anforderungen.',
      processingText36: 'Bereitstellung vorgeschrieben oder erforderlich',
      processingText37: 'Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns die erforderlichen Daten und den Grund der Anfrage mitteilen.',
      processingText38: 'Widerspruch',
      processingText39: 'Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.',
      processingText40: 'Reichweitenmessung',
      processingText41: 'Art und Zweck der Verarbeitung',
      processingText42: 'Die Reichweitenmessung dient der Auswertung der Besucherströme unseres Onlineangebotes und kann Verhalten, Interessen oder demographische Informationen zu den Besuchern, wie z.B. das Alter oder das Geschlecht, als pseudonyme Werte umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B. erkennen, zu welcher Zeit unser Onlineangebot oder dessen Funktionen oder Inhalte am häufigsten genutzt werden oder zur Wiederverwendung einladen. Ebenso können wir nachvollziehen, welche Bereiche der Anpassung bedürfen.',
      processingText43: 'Welche Tools wir zur Reichweitenmessung einsetzen, finden Sie weiter unten.',
      processingText44: 'Rechtsgrundlage',
      processingText45: 'Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses. Die Messung der Reichweite und die sich daraus ergebenden Informationen sind geeignet, um das Webangebot anzupassen.',
      processingText46: 'Empfänger',
      processingText47: 'Wir setzen für Betrieb und Wartung unserer Webseite technische Dienstleister ein, die als unsere Auftragsverarbeiter tätig werden.',
      processingText48: 'Speicherdauer',
      processingText49: 'Informationen zur Speicherdauer finden Sie in den unten aufgeführten Informationen zu den eingesetzten Tools.',
      processingText50: 'Bereitstellung vorgeschrieben oder erforderlich',
      processingText51: 'Die Bereitstellung der Daten ist weder gesetzlich noch vertraglich vorgeschrieben.',
      processingText52: 'Widerspruch',
      processingText53: 'Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.',
      processingText54: 'Eingesetzte Tools zur Reichweitenmessung',
      objectText1: 'Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO',
      objectText2: 'Einzelfallbezogenes Widerspruchsrecht',
      objectText3: 'Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.',
      objectText4: 'Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',
      objectText5: 'Empfänger eines Widerspruchs',
      objectText6: 'Änderung unserer Datenschutzerklärung',
      objectText7: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.',
      objectText8: 'Fragen zum Datenschutz',
      objectText9: 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an den oben genannten Verantwortlichen.',
      objectText10: 'Urheberrechtliche Hinweise',
      objectText11: 'Diese Datenschutzerklärung wurde mit Hilfe der activeMind AG erstellt – den Experten für',
      objectText12: 'externe Datenschutzbeauftragte'
    }
  };
}