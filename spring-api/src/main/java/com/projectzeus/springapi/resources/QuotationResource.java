package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.models.Quotation;
import com.projectzeus.springapi.repository.QuotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class QuotationResource {

    @Autowired
    QuotationRepository quotations;

    @GetMapping("/quotation/{id}")
    public ResponseEntity<Quotation> getQuotation(@PathVariable("id") long id) {
        return new ResponseEntity(quotations.findById(id), HttpStatus.OK);
    }

    @PostMapping("/quotation/create")
    public ResponseEntity<String> createQuotation(@RequestBody Quotation quotation) {
        quotations.save(quotation);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("quotation/update")
    public ResponseEntity<Quotation> updateQuotation(@RequestBody Quotation quotation) {
        return new ResponseEntity<>(quotations.save(quotation), HttpStatus.OK);

    }

    @DeleteMapping("quotation/delete")
    public ResponseEntity<String> deleteQuotation(@RequestBody Quotation quotation) {
        quotations.delete(quotation);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
