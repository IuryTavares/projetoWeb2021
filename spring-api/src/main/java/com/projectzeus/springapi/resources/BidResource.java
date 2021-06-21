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
        List<Long> productsIds = bidDTO.getProductsIds();
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

        List<ProductQuotation> productsToAdd = productsQuotation.findProductByIdIn(productsIds);
        if (productsToAdd.size() == 0) {
            return new ResponseEntity("Sem produtos para adicionar", HttpStatus.BAD_REQUEST);
        }
        bid.setProductQuotations(productsToAdd);

        bids.save(bid);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
