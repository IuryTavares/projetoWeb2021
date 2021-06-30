package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Bid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BidRepository extends JpaRepository<Bid, Long> {
    Bid findBidById(Long id);
    List<Bid> findBidsByEnterpriseId(Long id);
    List<Bid> findBidsByQuotationId(Long id);
}
