package com.projectzeus.springapi.resources;

import com.projectzeus.springapi.DTO.QuotationDTO;
import com.projectzeus.springapi.models.Enterprise;
import com.projectzeus.springapi.models.Product;
import com.projectzeus.springapi.models.ProductQuotation;
import com.projectzeus.springapi.models.Quotation;
import com.projectzeus.springapi.repository.EnterpriseRepository;
import com.projectzeus.springapi.repository.ProductQuotationRepository;
import com.projectzeus.springapi.repository.ProductRepository;
import com.projectzeus.springapi.repository.QuotationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class QuotationResource {

    @Autowired
    QuotationRepository quotations;
    @Autowired
    ProductRepository products;
    @Autowired
    ProductQuotationRepository productsQuotation;
    @Autowired
    EnterpriseRepository enterprises;

    @GetMapping("/quotation/{id}")
    public ResponseEntity<Quotation> getQuotation(@PathVariable("id") long id) {
        return new ResponseEntity(quotations.findById(id), HttpStatus.OK);
    }

    @GetMapping("/quotations")
    public ResponseEntity<List<Quotation>> getAll() {
        return new ResponseEntity<>(quotations.findAll(), HttpStatus.OK);
    }

    @PostMapping("/quotation/create/{cnpj}")
    public ResponseEntity<String> createQuotation(@RequestBody() QuotationDTO quotationDTO, @PathVariable("cnpj") String cnpj) {
        List<Long> ids = quotationDTO.getIds();
        Quotation quotation = quotationDTO.getQuotation();

        Enterprise loggedEnterprise = enterprises.findOneByCnpj(cnpj);
        if (loggedEnterprise == null)
            return new ResponseEntity("Empresa não cadastrada", HttpStatus.BAD_REQUEST);

        quotation.setEnterprise(loggedEnterprise);

        List<Product> productsToAdd = products.findProductByIdIn(ids);
        if (productsToAdd.size() == 0) {
            return new ResponseEntity("Sem produtos para adicionar", HttpStatus.BAD_REQUEST);
        }
        quotation.setOpen(true);
        quotations.save(quotation);
        List<ProductQuotation> productsQuotationsToAdd = new ArrayList<>();
        for (Product product : productsToAdd) {
            if (product != null) {
                ProductQuotation productQuotation = new ProductQuotation(
                        quotation,
                        product.getName(),
                        product.getDescription(),
                        product.getLimitPrice(),
                        product.getQuantity(),
                        product.getBrand()
                );
                productsQuotation.save(productQuotation);
                productsQuotationsToAdd.add(productQuotation);
            }
        }
        quotation.setProductsQuotations(productsQuotationsToAdd);
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
