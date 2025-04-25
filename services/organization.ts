// src/repos/EventsRepo.ts
import type { OrganizationCreate } from '@/api'
import { OrganizationApi } from '@/api'


const orgApi = new OrganizationApi()

const OrgService = {
  newOrganization: (body: OrganizationCreate) => orgApi.organizationCreate(body)
}

export default OrgService
