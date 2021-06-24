package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.DTO.BidDTO;
import com.projectzeus.springapi.models.Bid;
import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.models.ProductQuotation;
import com.projectzeus.springapi.models.Quotation;
import com.projectzeus.springapi.repository.BidRepository;
import com.projectzeus.springapi.repository.EnterpriseRepository;
import com.projectzeus.springapi.repository.ProductQuotationRepository;
import com.projectzeus.springapi.repository.QuotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="/api")
@CrossOrigin(origins = "*")
public class BidResource {

    @Autowired
    BidRepository bids;
    @Autowired
    EnterpriseRepository enterprises;
    @Autowired
    QuotationRepository quotations;
    @Autowired
    ProductQuotationRepository productsQuotation;

    @PostMapping("/bid/create/{cnpj}")
    public ResponseEntity<String> createEnterprise(@RequestBody BidDTO bidDTO, @PathVariable("cnpj") String cnpj) {
        Long quotationId = bidDTO.getQuotationId();

        Enterprise loggedEnterprise = enterprises.findOneByCnpj(cnpj);
        if (loggedEnterprise == null)
            return new ResponseEntity("Empresa não cadastrada", HttpStatus.BAD_REQUEST);

        Quotation quotation = quotations.findOneById(quotationId);
        if (quotation == null)
            return new ResponseEntity("Cotação não existe", HttpStatus.BAD_REQUEST);

        Bid bid = new Bid();
        bid.setEnterprise(loggedEnterprise);
        bid.setQuotation(quotation);
        bid.setPriceValue(bidDTO.getPriceValue());

        bids.save(bid);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/bid/get-all-by-enterprise/{cnpj}")
    public ResponseEntity<List<Bid>> getAllByEnterprise(@PathVariable("cnpj") String cnpj) {
        Enterprise enterprise = enterprises.findOneByCnpj(cnpj);
        return new ResponseEntity(bids.findBidsByEnterpriseId(enterprise.getId()), HttpStatus.OK);
    }

    @GetMapping("/bid/get-all-by-quotation/")
    public ResponseEntity<List<Bid>> getAllByQuotation(@RequestBody Long id) {
        Quotation quotation = quotations.findOneById(id);
        return new ResponseEntity(bids.findBidsByQuotationId(quotation.getId()), HttpStatus.OK);
    }
}
