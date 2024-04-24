package com.example.oblig3webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KundeRepo {
    @Autowired
    private JdbcTemplate db;
    public void lagreKunde(Kunde innkunde){
        String sql = "INSERT INTO Kunde (film,antall,fornavn,etternavn,epost,telefonnr) VALUES(?,?,?,?,?,?)";
        db.update(sql, innkunde.getFilm(), innkunde.getAntall(), innkunde.getFornavn(), innkunde.getEtternavn(),
                innkunde.getEpost(), innkunde.getTelefonnr());
    }
    public List<Kunde> hentAlleKunder(){
        String sql = "SELECT * FROM Kunde Order By etternavn";
        List<Kunde> alleKunder = db.query(sql, new BeanPropertyRowMapper(Kunde.class));
        return alleKunder;
    }
    public void SlettAlleBillettene(){
        String sql ="DELETE FROM Kunde";
        db.update(sql);
    }
}
