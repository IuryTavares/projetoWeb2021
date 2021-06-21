package com.projectzeus.springapi.repository;

import com.projectzeus.springapi.models.Bid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BidRepository extends JpaRepository<Bid, Long> {
}
