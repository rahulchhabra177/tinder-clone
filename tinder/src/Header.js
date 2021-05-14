import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import Icons  from '@material-ui/core/IconButton';
function Header() {
	return (
		<div className="Header">
			<Icons>
			<PersonIcon fontSize="large" className="header_icon"/>
			</Icons>
			<img className="header_logo" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo-2017-present-700x394.jpg?__cf_chl_jschl_tk__=b71318cdf2d377a2d5a03514ab304b3b83b63080-1620992679-0-AT44bpEKRALYwZ5xQE-TLRyu-HxySMKACXQkqBUXPAQHC67SqNVaRBOLTu-r1C_TW7LM5gBqVZ5LPf9SPPIrm4fctdKJSg2_4MAIi8hrhKZ2kOMKMRF5PBue1qo8UDF-4N5vNvExEIKTC-s6WW8bPep2QAbMYp1kdqryneS3iwMQOfXzqLVsQCgfYYRkrDrzh-TD5ESKBFW7eBJNRAnxjQUWgafLk1mpGB2oJHTMvTPWwqCPAkd4HFT9GzgabhCud4S2jm0ZAd702LSK761OLknsioMUm4MJ_qxa6LUQVl64N7ab4iwnT5R-vEKzbFeLGhG7PXaHaDs63gFTU9BFNoI4gagvH84NIMah0n2c23T_gpjGf4Uj1QJeePmK6H85UPSNxU64KSfS7Za72gLvnbjN_lxCaxqbQbqzXnKZljJr8DyG9tnZeplcy4h-nWFtceWjAzU76HbBrsDDuvQpwabafORLCVZVF-ga83G_8e2hlhPgKQhTROuk9gtBhcjAB9aUPozyoegxmscQB--8q_7jSRt_-bKHo6VNl9-UuOB4" alt="hell"/>
			<Icons>
			<ForumIcon fontSize="large" className="header_icon"/>
			</Icons>
		</div>
	)
}

export default Header

// used materialui for icons