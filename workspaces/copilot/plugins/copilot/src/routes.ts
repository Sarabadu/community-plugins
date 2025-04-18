/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createRouteRef, createSubRouteRef } from '@backstage/core-plugin-api';

export const copilotRouteRef = createRouteRef({
  id: 'copilot-dashboard',
});

export const enterpriseRouteRef = createSubRouteRef({
  id: 'enterprise-dashboard',
  parent: copilotRouteRef,
  path: '/enterprise',
});

export const organizationRouteRef = createSubRouteRef({
  id: 'organization-dashboard',
  parent: copilotRouteRef,
  path: '/organization',
});
