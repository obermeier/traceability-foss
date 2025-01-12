/********************************************************************************
 * Copyright (c) 2022, 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)
 * Copyright (c) 2022, 2023 ZF Friedrichshafen AG
 * Copyright (c) 2022, 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

package org.eclipse.tractusx.traceability.assets.infrastructure.repository.jpa.registrylookup;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.eclipse.tractusx.traceability.assets.domain.metrics.RegistryLookupMetric;
import org.eclipse.tractusx.traceability.assets.domain.metrics.RegistryLookupStatus;

import java.time.Instant;

@Entity
@Table(name = "registry_lookup_metrics")
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistryLookupMetricEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    private Instant startDate;

    private RegistryLookupStatus status;

    private Long successShellDescriptorsFetchCount;

    private Long failedShellDescriptorsFetchCount;

    private Instant endDate;

    public static RegistryLookupMetric toDomain(final RegistryLookupMetricEntity entity) {
        return new RegistryLookupMetric(
                entity.getStartDate(),
                entity.getStatus(),
                entity.getSuccessShellDescriptorsFetchCount(),
                entity.getFailedShellDescriptorsFetchCount(),
                entity.getEndDate()
        );
    }
}
