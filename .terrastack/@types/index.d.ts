/// <reference types="node" />
import { BaseComponent } from "terrastack";

export as namespace TerrastackTerraformAwsVpc;

export = Component;

declare class Component extends BaseComponent<Component.Configuration> {}

declare namespace Component {
  export interface Configuration extends object {
    /**
     * Controls if VPC should be created (it affects almost all resources).
     *
     * Default: true
     */
    create_vpc?: boolean;

    /**
     * Name to be used on all the resources as identifier.
     *
     * Default: ""
     */
    name?: string;

    /**
     * The CIDR block for the VPC. Default value is a valid CIDR, but not acceptable by AWS and should be overridden.
     *
     * Default: "0.0.0.0/0"
     */
    cidr?: string;

    /**
     * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block.
     *
     * Default: false
     */
    assign_generated_ipv6_cidr_block?: boolean;

    /**
     * List of secondary CIDR blocks to associate with the VPC to extend the IP Address pool.
     *
     * Default: []
     */
    secondary_cidr_blocks?: array;

    /**
     * A tenancy option for instances launched into the VPC.
     *
     * Default: "default"
     */
    instance_tenancy?: string;

    /**
     * Suffix to append to public subnets name.
     *
     * Default: "public"
     */
    public_subnet_suffix?: string;

    /**
     * Suffix to append to private subnets name.
     *
     * Default: "private"
     */
    private_subnet_suffix?: string;

    /**
     * Suffix to append to database subnets name.
     *
     * Default: "db"
     */
    database_subnet_suffix?: string;

    /**
     * Suffix to append to redshift subnets name.
     *
     * Default: "redshift"
     */
    redshift_subnet_suffix?: string;

    /**
     * Suffix to append to elasticache subnets name.
     *
     * Default: "elasticache"
     */
    elasticache_subnet_suffix?: string;

    /**
     * A list of public subnets inside the VPC.
     *
     * Default: []
     */
    public_subnets?: array;

    /**
     * A list of private subnets inside the VPC.
     *
     * Default: []
     */
    private_subnets?: array;

    /**
     * A list of database subnets.
     *
     * Default: []
     */
    database_subnets?: array;

    /**
     * A list of redshift subnets.
     *
     * Default: []
     */
    redshift_subnets?: array;

    /**
     * A list of elasticache subnets.
     *
     * Default: []
     */
    elasticache_subnets?: array;

    /**
     * Controls if separate route table for database should be created.
     *
     * Default: false
     */
    create_database_subnet_route_table?: boolean;

    /**
     * Controls if separate route table for redshift should be created.
     *
     * Default: false
     */
    create_redshift_subnet_route_table?: boolean;

    /**
     * Controls if separate route table for elasticache should be created.
     *
     * Default: false
     */
    create_elasticache_subnet_route_table?: boolean;

    /**
     * A list of intra subnets.
     *
     * Default: []
     */
    intra_subnets?: array;

    /**
     * Controls if database subnet group should be created.
     *
     * Default: true
     */
    create_database_subnet_group?: boolean;

    /**
     * A list of availability zones in the region.
     *
     * Default: []
     */
    azs?: array;

    /**
     * Should be true to enable DNS hostnames in the VPC.
     *
     * Default: false
     */
    enable_dns_hostnames?: boolean;

    /**
     * Should be true to enable DNS support in the VPC.
     *
     * Default: true
     */
    enable_dns_support?: boolean;

    /**
     * Should be true if you want to provision NAT Gateways for each of your private networks.
     *
     * Default: false
     */
    enable_nat_gateway?: boolean;

    /**
     * Should be true if you want to provision a single shared NAT Gateway across all of your private networks.
     *
     * Default: false
     */
    single_nat_gateway?: boolean;

    /**
     * Should be true if you want only one NAT Gateway per availability zone. Requires `var.azs` to be set, and the number of `public_subnets` created to be greater than or equal to the number of availability zones specified in `var.azs`..
     *
     * Default: false
     */
    one_nat_gateway_per_az?: boolean;

    /**
     * Should be true if you don't want EIPs to be created for your NAT Gateways and will instead pass them in via the 'external_nat_ip_ids' variable.
     *
     * Default: false
     */
    reuse_nat_ips?: boolean;

    /**
     * List of EIP IDs to be assigned to the NAT Gateways (used in combination with reuse_nat_ips).
     *
     * Default: []
     */
    external_nat_ip_ids?: array;

    /**
     * Should be true if you want to provision a DynamoDB endpoint to the VPC.
     *
     * Default: false
     */
    enable_dynamodb_endpoint?: boolean;

    /**
     * Should be true if you want to provision an S3 endpoint to the VPC.
     *
     * Default: false
     */
    enable_s3_endpoint?: boolean;

    /**
     * Should be false if you do not want to auto-assign public IP on launch.
     *
     * Default: true
     */
    map_public_ip_on_launch?: boolean;

    /**
     * Should be true if you want to create a new VPN Gateway resource and attach it to the VPC.
     *
     * Default: false
     */
    enable_vpn_gateway?: boolean;

    /**
     * ID of VPN Gateway to attach to the VPC.
     *
     * Default: ""
     */
    vpn_gateway_id?: string;

    /**
     * Should be true if you want route table propagation.
     *
     * Default: false
     */
    propagate_private_route_tables_vgw?: boolean;

    /**
     * Should be true if you want route table propagation.
     *
     * Default: false
     */
    propagate_public_route_tables_vgw?: boolean;

    /**
     * A map of tags to add to all resources.
     *
     * Default: {}
     */
    tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the VPC.
     *
     * Default: {}
     */
    vpc_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the internet gateway.
     *
     * Default: {}
     */
    igw_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the public subnets.
     *
     * Default: {}
     */
    public_subnet_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the private subnets.
     *
     * Default: {}
     */
    private_subnet_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the public route tables.
     *
     * Default: {}
     */
    public_route_table_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the private route tables.
     *
     * Default: {}
     */
    private_route_table_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the database route tables.
     *
     * Default: {}
     */
    database_route_table_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the redshift route tables.
     *
     * Default: {}
     */
    redshift_route_table_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the elasticache route tables.
     *
     * Default: {}
     */
    elasticache_route_table_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the intra route tables.
     *
     * Default: {}
     */
    intra_route_table_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the database subnets.
     *
     * Default: {}
     */
    database_subnet_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the database subnet group.
     *
     * Default: {}
     */
    database_subnet_group_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the redshift subnets.
     *
     * Default: {}
     */
    redshift_subnet_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the redshift subnet group.
     *
     * Default: {}
     */
    redshift_subnet_group_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the elasticache subnets.
     *
     * Default: {}
     */
    elasticache_subnet_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the intra subnets.
     *
     * Default: {}
     */
    intra_subnet_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the DHCP option set.
     *
     * Default: {}
     */
    dhcp_options_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the NAT gateways.
     *
     * Default: {}
     */
    nat_gateway_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the NAT EIP.
     *
     * Default: {}
     */
    nat_eip_tags?: BaseComponent.KeyValuePair;

    /**
     * Additional tags for the VPN gateway.
     *
     * Default: {}
     */
    vpn_gateway_tags?: BaseComponent.KeyValuePair;

    /**
     * Should be true if you want to specify a DHCP options set with a custom domain name, DNS servers, NTP servers, netbios servers, and/or netbios server type.
     *
     * Default: false
     */
    enable_dhcp_options?: boolean;

    /**
     * Specifies DNS name for DHCP options set.
     *
     * Default: ""
     */
    dhcp_options_domain_name?: string;

    /**
     * Specify a list of DNS server addresses for DHCP options set, default to AWS provided.
     *
     * Default: "AmazonProvidedDNS"
     */
    dhcp_options_domain_name_servers?: array;

    /**
     * Specify a list of NTP servers for DHCP options set.
     *
     * Default: []
     */
    dhcp_options_ntp_servers?: array;

    /**
     * Specify a list of netbios servers for DHCP options set.
     *
     * Default: []
     */
    dhcp_options_netbios_name_servers?: array;

    /**
     * Specify netbios node_type for DHCP options set.
     *
     * Default: ""
     */
    dhcp_options_netbios_node_type?: string;

    /**
     * Should be true to adopt and manage Default VPC.
     *
     * Default: false
     */
    manage_default_vpc?: boolean;

    /**
     * Name to be used on the Default VPC.
     *
     * Default: ""
     */
    default_vpc_name?: string;

    /**
     * Should be true to enable DNS support in the Default VPC.
     *
     * Default: true
     */
    default_vpc_enable_dns_support?: boolean;

    /**
     * Should be true to enable DNS hostnames in the Default VPC.
     *
     * Default: false
     */
    default_vpc_enable_dns_hostnames?: boolean;

    /**
     * Should be true to enable ClassicLink in the Default VPC.
     *
     * Default: false
     */
    default_vpc_enable_classiclink?: boolean;

    /**
     * Additional tags for the Default VPC.
     *
     * Default: {}
     */
    default_vpc_tags?: BaseComponent.KeyValuePair;

  }
}
