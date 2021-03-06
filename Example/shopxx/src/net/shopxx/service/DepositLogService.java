/*
 * Copyright 2005-2015 shopxx.net. All rights reserved.
 * Support: http://www.shopxx.net
 * License: http://www.shopxx.net/license
 */
package net.shopxx.service;

import net.shopxx.Page;
import net.shopxx.Pageable;
import net.shopxx.entity.DepositLog;
import net.shopxx.entity.Member;

/**
 * Service - 预存款记录
 * 
 * @author SHOP++ Team
 * @version 4.0
 */
public interface DepositLogService extends BaseService<DepositLog, Long> {

	/**
	 * 查找预存款记录分页
	 * 
	 * @param member
	 *            会员
	 * @param pageable
	 *            分页信息
	 * @return 预存款记录分页
	 */
	Page<DepositLog> findPage(Member member, Pageable pageable);

}