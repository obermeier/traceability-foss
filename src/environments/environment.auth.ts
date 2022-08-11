/********************************************************************************
 * Copyright (c) 2021,2022 Contributors to the CatenaX (ng) GitHub Organisation
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

import { _environment } from './_environment.base';

export const environment = {
  ..._environment,
  multiTenant: true,
  mockService: false,
  authDisabled: false,
  apiUrl: 'https://traceability.int.demo.catena-x.net/api',
  keycloakUrl: 'https://centralidp.dev.demo.catena-x.net/auth',
  clientId: 'Cl10-CX-Part',
  defaultRealm: 'CX-Central',
  api: '',
};
