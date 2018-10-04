const path = require("path");

/**
* @typedef InputProperties
* @type {object}
* @property {boolean} [create_vpc=true] - Controls if VPC should be created (it affects almost all resources). Default: true
* @property {string} [name=""] - Name to be used on all the resources as identifier. Default: ""
* @property {string} [cidr="0.0.0.0/0"] - The CIDR block for the VPC. Default value is a valid CIDR, but not acceptable by AWS and should be overridden. Default: "0.0.0.0/0"
* @property {boolean} [assign_generated_ipv6_cidr_block=false] - Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block. Default: false
* @property {Array} [secondary_cidr_blocks=[]] - List of secondary CIDR blocks to associate with the VPC to extend the IP Address pool. Default: []
* @property {string} [instance_tenancy="default"] - A tenancy option for instances launched into the VPC. Default: "default"
* @property {string} [public_subnet_suffix="public"] - Suffix to append to public subnets name. Default: "public"
* @property {string} [private_subnet_suffix="private"] - Suffix to append to private subnets name. Default: "private"
* @property {string} [database_subnet_suffix="db"] - Suffix to append to database subnets name. Default: "db"
* @property {string} [redshift_subnet_suffix="redshift"] - Suffix to append to redshift subnets name. Default: "redshift"
* @property {string} [elasticache_subnet_suffix="elasticache"] - Suffix to append to elasticache subnets name. Default: "elasticache"
* @property {Array} [public_subnets=[]] - A list of public subnets inside the VPC. Default: []
* @property {Array} [private_subnets=[]] - A list of private subnets inside the VPC. Default: []
* @property {Array} [database_subnets=[]] - A list of database subnets. Default: []
* @property {Array} [redshift_subnets=[]] - A list of redshift subnets. Default: []
* @property {Array} [elasticache_subnets=[]] - A list of elasticache subnets. Default: []
* @property {boolean} [create_database_subnet_route_table=false] - Controls if separate route table for database should be created. Default: false
* @property {boolean} [create_redshift_subnet_route_table=false] - Controls if separate route table for redshift should be created. Default: false
* @property {boolean} [create_elasticache_subnet_route_table=false] - Controls if separate route table for elasticache should be created. Default: false
* @property {Array} [intra_subnets=[]] - A list of intra subnets. Default: []
* @property {boolean} [create_database_subnet_group=true] - Controls if database subnet group should be created. Default: true
* @property {Array} [azs=[]] - A list of availability zones in the region. Default: []
* @property {boolean} [enable_dns_hostnames=false] - Should be true to enable DNS hostnames in the VPC. Default: false
* @property {boolean} [enable_dns_support=true] - Should be true to enable DNS support in the VPC. Default: true
* @property {boolean} [enable_nat_gateway=false] - Should be true if you want to provision NAT Gateways for each of your private networks. Default: false
* @property {boolean} [single_nat_gateway=false] - Should be true if you want to provision a single shared NAT Gateway across all of your private networks. Default: false
* @property {boolean} [one_nat_gateway_per_az=false] - Should be true if you want only one NAT Gateway per availability zone. Requires `var.azs` to be set, and the number of `public_subnets` created to be greater than or equal to the number of availability zones specified in `var.azs`.. Default: false
* @property {boolean} [reuse_nat_ips=false] - Should be true if you don't want EIPs to be created for your NAT Gateways and will instead pass them in via the 'external_nat_ip_ids' variable. Default: false
* @property {Array} [external_nat_ip_ids=[]] - List of EIP IDs to be assigned to the NAT Gateways (used in combination with reuse_nat_ips). Default: []
* @property {boolean} [enable_dynamodb_endpoint=false] - Should be true if you want to provision a DynamoDB endpoint to the VPC. Default: false
* @property {boolean} [enable_s3_endpoint=false] - Should be true if you want to provision an S3 endpoint to the VPC. Default: false
* @property {boolean} [map_public_ip_on_launch=true] - Should be false if you do not want to auto-assign public IP on launch. Default: true
* @property {boolean} [enable_vpn_gateway=false] - Should be true if you want to create a new VPN Gateway resource and attach it to the VPC. Default: false
* @property {string} [vpn_gateway_id=""] - ID of VPN Gateway to attach to the VPC. Default: ""
* @property {boolean} [propagate_private_route_tables_vgw=false] - Should be true if you want route table propagation. Default: false
* @property {boolean} [propagate_public_route_tables_vgw=false] - Should be true if you want route table propagation. Default: false
* @property {Object.<string, (string|number)>} [tags={}] - A map of tags to add to all resources. Default: {}
* @property {Object.<string, (string|number)>} [vpc_tags={}] - Additional tags for the VPC. Default: {}
* @property {Object.<string, (string|number)>} [igw_tags={}] - Additional tags for the internet gateway. Default: {}
* @property {Object.<string, (string|number)>} [public_subnet_tags={}] - Additional tags for the public subnets. Default: {}
* @property {Object.<string, (string|number)>} [private_subnet_tags={}] - Additional tags for the private subnets. Default: {}
* @property {Object.<string, (string|number)>} [public_route_table_tags={}] - Additional tags for the public route tables. Default: {}
* @property {Object.<string, (string|number)>} [private_route_table_tags={}] - Additional tags for the private route tables. Default: {}
* @property {Object.<string, (string|number)>} [database_route_table_tags={}] - Additional tags for the database route tables. Default: {}
* @property {Object.<string, (string|number)>} [redshift_route_table_tags={}] - Additional tags for the redshift route tables. Default: {}
* @property {Object.<string, (string|number)>} [elasticache_route_table_tags={}] - Additional tags for the elasticache route tables. Default: {}
* @property {Object.<string, (string|number)>} [intra_route_table_tags={}] - Additional tags for the intra route tables. Default: {}
* @property {Object.<string, (string|number)>} [database_subnet_tags={}] - Additional tags for the database subnets. Default: {}
* @property {Object.<string, (string|number)>} [database_subnet_group_tags={}] - Additional tags for the database subnet group. Default: {}
* @property {Object.<string, (string|number)>} [redshift_subnet_tags={}] - Additional tags for the redshift subnets. Default: {}
* @property {Object.<string, (string|number)>} [redshift_subnet_group_tags={}] - Additional tags for the redshift subnet group. Default: {}
* @property {Object.<string, (string|number)>} [elasticache_subnet_tags={}] - Additional tags for the elasticache subnets. Default: {}
* @property {Object.<string, (string|number)>} [intra_subnet_tags={}] - Additional tags for the intra subnets. Default: {}
* @property {Object.<string, (string|number)>} [dhcp_options_tags={}] - Additional tags for the DHCP option set. Default: {}
* @property {Object.<string, (string|number)>} [nat_gateway_tags={}] - Additional tags for the NAT gateways. Default: {}
* @property {Object.<string, (string|number)>} [nat_eip_tags={}] - Additional tags for the NAT EIP. Default: {}
* @property {Object.<string, (string|number)>} [vpn_gateway_tags={}] - Additional tags for the VPN gateway. Default: {}
* @property {boolean} [enable_dhcp_options=false] - Should be true if you want to specify a DHCP options set with a custom domain name, DNS servers, NTP servers, netbios servers, and/or netbios server type. Default: false
* @property {string} [dhcp_options_domain_name=""] - Specifies DNS name for DHCP options set. Default: ""
* @property {Array} [dhcp_options_domain_name_servers="AmazonProvidedDNS"] - Specify a list of DNS server addresses for DHCP options set, default to AWS provided. Default: "AmazonProvidedDNS"
* @property {Array} [dhcp_options_ntp_servers=[]] - Specify a list of NTP servers for DHCP options set. Default: []
* @property {Array} [dhcp_options_netbios_name_servers=[]] - Specify a list of netbios servers for DHCP options set. Default: []
* @property {string} [dhcp_options_netbios_node_type=""] - Specify netbios node_type for DHCP options set. Default: ""
* @property {boolean} [manage_default_vpc=false] - Should be true to adopt and manage Default VPC. Default: false
* @property {string} [default_vpc_name=""] - Name to be used on the Default VPC. Default: ""
* @property {boolean} [default_vpc_enable_dns_support=true] - Should be true to enable DNS support in the Default VPC. Default: true
* @property {boolean} [default_vpc_enable_dns_hostnames=false] - Should be true to enable DNS hostnames in the Default VPC. Default: false
* @property {boolean} [default_vpc_enable_classiclink=false] - Should be true to enable ClassicLink in the Default VPC. Default: false
* @property {Object.<string, (string|number)>} [default_vpc_tags={}] - Additional tags for the Default VPC. Default: {}
*/

/**
 * inputCallback to configure the component input.
 * @callback inputCallback
 * @param {object} bindings
 * @returns {InputProperties} inputs object for the component
 */

class Component {

  /**
   * Initialize the component
   * @param {string} name - Unique name for the component
   * @param {object} bindings - Define dependencies for this component. Will be passed as argument to the optionsCallback
   * @param {inputCallback} inputCallback - Configure the component via the return value of this callback
   */
  constructor(name, bindings, inputCallback) {
    this.name = name;
    this.inputCallback = inputCallback;
    this.bindings = bindings;
    this.sourceDir = path.join(__dirname, "../..");
    this.version = 1
  }
}

module.exports = Component;
