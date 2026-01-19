// types.ts

export interface TerraformResource {
  id: string;
  name: string;
  type: string;
  provider: string;
}

export interface TerraformState {
  version: string;
  terraformVersion: string;
  resources: TerraformResource[];
}

export interface AwsInstance {
  id: string;
  ami: string;
  instanceType: string;
  vpcSecurityGroupIds: string[];
  subnetId: string;
}

export interface AwsSecurityGroup {
  id: string;
  name: string;
  description: string;
  ingressRules: { protocol: string; fromPort: number; toPort: number; cidrBlocks: string[] }[];
}

export interface GcpInstance {
  id: string;
  machineType: string;
  bootDisk: { sourceImage: string };
  networkInterfaces: { accessConfigs: { natIp: string }[] }[];
}

export type CloudProvider = 'aws' | 'gcp' | 'azure';

export interface InfraConfig {
  provider: CloudProvider;
  region: string;
  instances: (AwsInstance | GcpInstance)[];
  securityGroups: AwsSecurityGroup[];
}